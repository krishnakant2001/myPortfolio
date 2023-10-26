import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    // Annotation,
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                // rotate: [-76, -20, 0],
                rotate : [-76, 0, -3],
                center: [-20, 9],
                scale: 250
            }}
            style={{width: "100%", height: "100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="transparent"
                stroke="white"
                strokeWidth={0.6}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            {/* <Annotation
                subject={[77.1025, 28.7041]}
                dx={60}
                dy={-30}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="76" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"New Delhi"}
                </text>
            </Annotation> */}
        </ComposableMap>
    );
};

export default MapChart;
