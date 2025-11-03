import React from "react";

import Card from "./Card";

export default function SectionCard() {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Card />
                </div>
            </div>
        </div>
    );
};