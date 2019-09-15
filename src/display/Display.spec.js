// Test away!
//the display component displays the red locked and closed signs
//and the green unlocked and open signs

import React from "react";
import Display from "./Display.js";
import {render} from "@testing-library/react";

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />);

    });

    
    it("both gates are open", () => {        

        //when false is passed to both locked and closed it means both gates are open
        //both divs in the display component will display unlocked and open
        //destructure getByText from render
        //getByText checks that unlocked and open are on the page when locked={false} closed={false} are passed 
        //as props to <Display />
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText(/unlocked/i); //i means ignore case
        getByText(/open/i);

    });

    it("both gates are closed", () => {        

        //when true is passed to both locked and closed it means both gates are closed
        //both divs in the display component will display locked and closed
        //destructure getByText from render
        //getByText checks that locked and closed are on the page when locked={true} closed={true} are passed 
        //as props to <Display />
        const { getByText } = render(<Display locked={true} closed={true} />);
        //^$ are reg expressions that says we are looking for exactly "locked" otherwise 
        //if getByText found unlocked it would also pass the test
        getByText(/^locked$/i); //i means ignore case
        getByText(/closed/i);

    });

    it("one gate is open and the other is closed: unlocked/closed", () => {        

        const { getByText } = render(<Display locked={false} closed={true} />);
        getByText(/unlocked/i); 
        getByText(/closed/i);

    });

    it("one gate is locked and the other is unlocked: locked/open", () => {        

        const { getByText } = render(<Display locked={true} closed={false} />);
        getByText(/^locked$/i); 
        getByText(/open/i);

    });

    //when locked or closed use the red-led class
    it("locked or closed use the red-led class", () => {     
        
        const { getByText } = render(<Display locked={true} closed={true} />);
        const locked = getByText(/^locked$/i); 
        const closed = getByText(/closed/i);

        //checks if the className on the display component is "red-led" which indicated that it is closed
        expect (locked.className).toMatch(/\bred-led\b/i);
        expect (closed.className).toMatch(/\bled red-led\b/i);

    });

    //when unlocked or open use the green-led class
    it("unlocked or open use the green-led class", () => {     
        
        const { getByText } = render(<Display locked={false} closed={false} />);
        const unlocked = getByText(/unlocked/i); 
        const open = getByText(/open/i);

        //checks if the className on the display component is "red-led" which indicated that it is closed
        expect (unlocked.className).toMatch(/\bgreen-led\b/i);
        expect (open.className).toMatch(/\bgreen-led\b/i);

    });




    
    

});