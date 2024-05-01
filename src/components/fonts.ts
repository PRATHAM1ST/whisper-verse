import { Outfit as bodyfont, Yellowtail as titlefont } from "next/font/google";

const bodyFont = bodyfont({ subsets: ["latin"] });
const titleFont = titlefont({ weight: "400", subsets: ["latin"] });

export { bodyFont, titleFont };