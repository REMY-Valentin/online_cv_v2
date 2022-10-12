interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Skills extends SanityBody {
  _type: "skills";
  iconeName: string;
  library: string;
  lvl: number;
  name: string;
  size: number;
  directionLeft?: boolean;
}

export interface Projects extends SanityBody {
  _type: "projects";
  name: string;
  image: Image;
  technos: string[];
  text: string[];
}
