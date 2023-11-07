import * as React from "react";
import { DashboardContainerProps } from "piral";

const defaultTiles = (
    <>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://piral.io/">Piral App</a>
                <br />
                for next generation portals
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://www.typescriptlang.org/">TypeScript</a>
                <br />
                for writing scalable web apps
            </div>
        </div>
        <div className="tile rows-2 cols-2">
            <div className="teaser">
                <a href="https://reactjs.org/">React</a>
                <br />
                for building components
            </div>
        </div>
    </>
);

export const DashboardContainer: React.FC<DashboardContainerProps> = ({ children }) => (
    <div>
        <h1>Hello World!!!</h1>
        <p>Welcome to your new microfrontend app shell, built with:</p>
        <div className="tiles">
            {/* {defaultTiles} */}
            {children}
        </div>
    </div>
);