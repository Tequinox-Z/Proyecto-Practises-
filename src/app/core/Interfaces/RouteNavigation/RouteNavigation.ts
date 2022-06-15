
export interface RouteNavigation {
    routes: Route[];
    waypoints: Waypoint[];
    code: string;
    uuid: string;
}


export interface Geometry {
    coordinates: number[][];
    type: string;
}

export interface Intersection {
    out: number;
    entry: boolean[];
    bearings: number[];
    location: number[];
    in?: number;
}

export interface Geometry2 {
    coordinates: number[][];
    type: string;
}

export interface Maneuver {
    bearing_after: number;
    bearing_before: number;
    location: number[];
    type: string;
    instruction: string;
}

export interface Step {
    intersections: Intersection[];
    driving_side: string;
    geometry: Geometry2;
    mode: string;
    maneuver: Maneuver;
    weight: number;
    duration: number;
    name: string;
    distance: number;
}

export interface Leg {
    summary: string;
    weight: number;
    duration: number;
    steps: Step[];
    distance: number;
}

export interface Route {
    geometry: Geometry;
    legs: Leg[];
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
}

export interface Waypoint {
    distance: number;
    name: string;
    location: number[];
}


