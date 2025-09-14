import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import CodedBy from "./CodedBy";

function MemeApp() {
    return (
        <div>
            <Header />
            <MemeGenerator />
            <CodedBy />
        </div>
    );
}

export default MemeApp;
