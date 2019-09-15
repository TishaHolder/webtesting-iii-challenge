// Test away!
import React from "react";
import {render} from "@testing-library/react";
import Controls from "./Controls.js";

describe ("<Controls />", ()=> {
    it("renders without crashing", ()=> {
        render(<Controls />);

    });

});