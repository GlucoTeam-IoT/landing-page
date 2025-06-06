export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface TeamConfig {
  members: TeamMember[];
}

export const teamConfig: TeamConfig = {
  members: [
    {
      id: "alejandra-diaz",
      name: "Alejandra Díaz",
      position: "Software Developer",
      image: "AlejandraDiaz.jpg",
    },
    {
      id: "stefano-valenzuela",
      name: "Stefano Valenzuela",
      position: "Software Developer",
      image: "StefanoValenzuela.jpg",
    },
    {
      id: "jeremi-antonio",
      name: "Jeremi Antonio",
      position: "UX Designer",
      image: "JeremiAntonio.jpg",
    },
    {
      id: "jose-calderon",
      name: "José Calderón",
      position: "Software Developer",
      image: "JoseCalderon.jpg",
    },
    {
      id: "jair-coraje",
      name: "Jair Coraje",
      position: "Software Developer",
      image: "JairCoraje.jpg",
    },
  ],
};
