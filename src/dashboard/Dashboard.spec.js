// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library"; //fireEvent lets us click on our DOM elements
import Dashboard from "./Dashboard.js";


describe ("<Dashboard />", ()=> {

    it("renders without crashing", ()=> {
        render(<Dashboard />);

    });

    it("contains the display components: unlocked/open ", ()=> {

        const { getByText } = render(<Dashboard />);
        getByText(/^unlocked$/i); 
        getByText(/^open$/i);

    });

    it("contains the control components: lock gate/close gate buttons", ()=> {
        
        const { getByText } = render(<Dashboard />);
        
        const lockGateBtn = getByText (/^lock gate$/i);
        const closeGateBtn = getByText (/^close gate$/i);

    });

    

    it("display has unlocked and open and control buttons are lock gate and close gate", ()=> {
        
        const { getByText } = render(<Dashboard />);
        getByText(/^unlocked$/i); 
        getByText(/^open$/i);

        const lockGateBtn = getByText (/^lock gate$/i);
        const closeGateBtn = getByText (/close gate/i);

        //the lock gate button is disabled - when the close gate button is clicked
        fireEvent.click(closeGateBtn);

        //display text changes to...
        getByText(/^unlocked$/i); 
        getByText(/^closed$/i);

        //button text changes to...
        getByText(/^lock gate$/i); 
        getByText(/^open gate$/i);

    });

    it("display has unlocked and closed and control buttons are lock gate and open gate", ()=> {
        
        const { getByText } = render(<Dashboard />);
        getByText(/^unlocked$/i); 
        getByText(/^closed$/i);

        const lockGateBtn = getByText (/^lock gate$/i);
        const openGateBtn = getByText (/^open gate$/i);

        //when the lock gate button is clicked
        fireEvent.click(lockGateBtn);

        //display text changes to...
        getByText(/^locked$/i); 
        getByText(/^closed$/i);

        //button text changes to...
        getByText(/^unlock gate$/i); 
        getByText(/^open gate$/i);

    });

    it("display has locked and closed and control buttons are unlock gate and open gate", ()=> {
        
        const { getByText } = render(<Dashboard />);
        getByText(/^locked$/i); 
        getByText(/^closed$/i);

        const lockGateBtn = getByText (/^unlock gate$/i);
        const openGateBtn = getByText (/^open gate$/i);

        //when the unlock gate button is clicked
        fireEvent.click(lockGateBtn);

        //display text changes to...
        getByText(/^unlocked$/i); 
        getByText(/^closed$/i);

        //button text changes to...
        getByText(/^lock gate$/i); 
        getByText(/^open gate$/i);

    });

    it("display has unlocked and closed and control buttons are lock gate and open gate", ()=> {
        
        const { getByText } = render(<Dashboard />);
        getByText(/^unlocked$/i); 
        getByText(/^closed$/i);

        const lockGateBtn = getByText (/^lock gate$/i);
        const openGateBtn = getByText (/^open gate$/i);

        //when the unlock gate button is clicked
        fireEvent.click(openGateBtn);

        //display text changes to...
        getByText(/^unlocked$/i); 
        getByText(/^open$/i);

        //button text changes to...
        getByText(/^lock gate$/i); 
        getByText(/^close gate$/i);

    });    

});


