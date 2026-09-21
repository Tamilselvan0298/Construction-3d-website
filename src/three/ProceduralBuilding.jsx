import React from 'react';
import SiteTerrain from './SiteTerrain';
import FoundationGroup from './FoundationGroup';
import StructuralFrame from './StructuralFrame';
import WallsGroup from './WallsGroup';
import RoofGroup from './RoofGroup';
import FacadeGroup from './FacadeGroup';
import LandscapeGroup from './LandscapeGroup';

export default function ProceduralBuilding({ progress = 0 }) {
  return (
    <group position={[0, 0, 0]} name="ProceduralBuildingMaster">
      {/* STAGE 00: SITE TERRAIN & SURVEY GRID */}
      <SiteTerrain progress={progress} />

      {/* STAGE 01: ISOLATED CONCRETE FOOTINGS & EXCAVATION */}
      <FoundationGroup progress={progress} />

      {/* STAGE 02 & 04 & 05: REINFORCED CONCRETE FRAME, COLUMNS, BEAMS, SLABS */}
      <StructuralFrame progress={progress} />

      {/* STAGE 03: GROUND & UPPER MASONRY WALLS & SERVICE CORES */}
      <WallsGroup progress={progress} />

      {/* STAGE 06: MONOLITHIC ROOF SLAB, PARAPETS & PERGOLA */}
      <RoofGroup progress={progress} />

      {/* STAGE 07: ARCHITECTURAL FACADE, GLASS, MULLIONS & LOUVERS */}
      <FacadeGroup progress={progress} />

      {/* STAGE 08: LANDSCAPE, DRIVEWAY, BOUNDARY WALL & ARCHITECTURAL LIGHTING */}
      <LandscapeGroup progress={progress} />
    </group>
  );
}
