import React from "react";
import "./App.css";
import Crossword, {
  Grid,
  Cell,
  HiddenInput,
  Controls,
  ConfirmButton,
  AnagramHelper,
  ClueInput,
  Ring,
  CluePreview,
  Clues,
  Clue
} from "react-crossword";

export default function App() {
  const data = {
    id: "simple/1",
    number: 1,
    name: "Simple Crossword 1",
    date: 1542326400000,
    entries: [
      {
        id: "1-across",
        number: 1,
        humanNumber: "1",
        clue: "Buah yang berwarna kuning",
        direction: "across",
        length: 6,
        group: ["1-across"],
        position: { x: 4, y: 4 },
        separatorLocations: {},
        solution: "PISANG"
      },
      {
        id: "2-across",
        number: 2,
        humanNumber: "2",
        clue: "Tempat pesawat mendarat",
        direction: "across",
        length: 8,
        group: ["2-across"],
        position: { x: 3, y: 7 },
        separatorLocations: {},
        solution: "LANDASAN"
      },
      {
        id: "3-across",
        number: 3,
        humanNumber: "3",
        clue: "Perangkat untuk mengetik",
        direction: "across",
        length: 8,
        group: ["3-across"],
        position: { x: 3, y: 10 },
        separatorLocations: {},
        solution: "KEYBOARD"
      },
      {
        id: "4-across",
        number: 4,
        humanNumber: "4",
        clue: "Bahan untuk membangun rumah",
        direction: "across",
        length: 4,
        group: ["3-across"],
        position: { x: 8, y: 12 },
        separatorLocations: {},
        solution: "BATA"
      },
      {
        id: "1-down",
        number: 1,
        humanNumber: "1",
        clue: "Satu dari empat musim di tahun",
        direction: "down",
        length: 5,
        group: ["1-down"],
        position: {
          x: 6,
          y: 0
        },
        separatorLocations: {},
        solution: "PANAS"
      },
      {
        id: "2-down",
        number: 2,
        humanNumber: "2",
        clue: "Makanan Favorit kucing",
        direction: "down",
        length: 4,
        group: ["2-down"],
        position: {
          x: 5,
          y: 4
        },
        separatorLocations: {},
        solution: "IKAN"
      },
      {
        id: "3-down",
        number: 3,
        humanNumber: "3",
        clue: "Ibu kota Indonesia.",
        direction: "down",
        length: 7,
        group: ["3-down"],
        position: {
          x: 9,
          y: 6
        },
        separatorLocations: {},
        solution: "JAKARTA"
      },
      {
        id: "4-down",
        number: 4,
        humanNumber: "4",
        clue: "saya (sinonim)",
        direction: "down",
        length: 3,
        group: ["4-down"],
        position: {
          x: 11,
          y: 12
        },
        separatorLocations: {},
        solution: "AKU"
      }
    ],
    solutionAvailable: true,
    dateSolutionAvailable: 1542326400000,
    dimensions: {
      cols: 20,
      rows: 20
    },
    crosswordType: "quick"
  };

  return (
    <div className="App">
      <h1>Iti Game</h1>
      <Crossword data={data}>
        <Grid>
          <Cell />
        </Grid>
        <HiddenInput />
        <Controls>
          <ConfirmButton />
        </Controls>
        <AnagramHelper>
          <ClueInput />
          <Ring />
          <CluePreview />
        </AnagramHelper>
        <Clues>
          <Clue />
        </Clues>
      </Crossword>
    </div>
  );
}
