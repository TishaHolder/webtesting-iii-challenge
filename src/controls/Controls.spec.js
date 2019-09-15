// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react"; //fireEvent lets us click on our DOM elements
import Controls from "./Controls.js";

describe ("<Controls />", ()=> {
    it("renders without crashing", ()=> {
        render(<Controls />);

    });

    it("both gates are open: unlocked/open", ()=> {

        
        const lockGateSpy = jest.fn();
        const closeGateSpy = jest.fn();

        const { getByText } = render(<Controls locked={false} 
                                               closed={false} 
                                               toggleClosed={closeGateSpy}
                                               toggleLocked={lockGateSpy} />);

        const lockGateBtn = getByText (/lock gate/i);
        const closeGateBtn = getByText (/close gate/i);

        //if both are open the lock gate button is disabled and the close gate button is enabled
        expect (lockGateBtn.disabled).toBeTruthy();
        expect (closeGateBtn.disabled).toBeFalsy();

        //if both gates are open and the close gate button is clicked the closeGateSpy will be called
        fireEvent.click(closeGateBtn);
        expect(closeGateSpy).toBeCalled();        

    });

    it("both gates are closed: locked/closed", ()=> {

        const openGateSpy = jest.fn();
        const unlockGateSpy = jest.fn();

        const { getByText } = render(<Controls locked={true} 
                                               closed={true}
                                               toggleClosed={openGateSpy}
                                               toggleLocked={unlockGateSpy} />);

        const unlockGateBtn = getByText (/unlock gate/i);
        const openGateBtn = getByText (/open gate/i);

        //if both are closed the unlock gate button is enabled and the open gate button is disabled
        expect (unlockGateBtn.disabled).toBeFalsy();
        expect (openGateBtn.disabled).toBeTruthy();

        //if both gates are closed and the unlock gate button is clicked the unlockGateSpy will be called
        fireEvent.click(unlockGateBtn);
        expect(unlockGateSpy).toBeCalled();  

    });

    it("one gate is unlocked and the other is closed: unlocked/closed", ()=> {
        
        const lockGateSpy = jest.fn();
        const openGateSpy = jest.fn();

        const { getByText } = render(<Controls locked={false} 
                                               closed={true} 
                                               toggleClosed={openGateSpy}
                                               toggleLocked={lockGateSpy} />);

        const lockGateBtn = getByText (/lock gate/i);
        const openGateBtn = getByText (/open gate/i);

        //if one gate is unlocked and the other is closed then the lock gate and open gate buttons are enabled  
        expect (lockGateBtn.disabled).toBeFalsy();
        expect (openGateBtn.disabled).toBeFalsy();

        //if one gate is unlocked and the other is closed and the open gate button is clicked
        fireEvent.click(openGateBtn);
        expect(openGateSpy).toBeCalled();  
        
        //if one gate is unlocked and the other is closed and the lock gate button is clicked the lockGateSpy will be called
        fireEvent.click(lockGateBtn);
        expect(lockGateSpy).toBeCalled();        


    });




});