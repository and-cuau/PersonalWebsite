import { useEffect, useRef, useState } from "react";

import GridCell from './GridCell/GridCell';

// import "../App.css";
export default function ProjectGrid({ set }) {


  return (
    <>
      <div className="projectgrid">

         {[...Array(6)].map((_, i) => (
          <GridCell index={i} set={set} />
        ))} 

        
      </div>
    </>
  );
}