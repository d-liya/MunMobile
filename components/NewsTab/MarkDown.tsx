import React from "react";
import Markdown from "react-native-markdown-display";
import { StyleSheet } from "react-native";
import Colors, { NewsSectionColors, red } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

export default function MarkDown({ category }: string) {
  const color = useColorScheme();
  const styles = StyleSheet.create({
    body: {
      color: Colors[color].text,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    blockquote: {
      backgroundColor: "transparent",
      color: NewsSectionColors[category],
      borderColor: NewsSectionColors[category],
    },
    link: {
      color: red,
    },
  });

  return <Markdown style={styles}>{temp}</Markdown>;
}

const temp = `May 5, 2021

BY  [KELLY FOSS](https://gazette.mun.ca/contributor/kelly-foss)

A Memorial researcher has been awarded funding for a proof-of-concept project that would see metal-organic frameworks (MOFs) used to separate carbon dioxide (CO2) from offshore oil and gas exhaust streams.

MOFs are a porous material that can be designed at the atomic level for different applications and tuned by changing the size, shape and surface chemistry.

Dr. Michael Katz is an associate professor with the Department of Chemistry in the Faculty of Science.

He has been awarded $655,900 from the offshore research, development and demonstration (RD&D) component of Natural Resources Canada’s (NRCan) Emissions Reduction Fund (ERF) to develop a small-scale filtration system to separate CO2 from a simulated exhaust stream.

Petroleum Research Newfoundland and Labrador (PRNL) is managing and executing the $33 million offshore RD&D component of the ERF program, which supports projects that advance solutions to decarbonize Newfoundland and Labrador’s offshore industry.

### Real-world offshore applications

The virtual announcement was made May 5 by Seamus O’Regan Jr., minister of Natural Resources, and Dave Finn, CEO, Petroleum Research Newfoundland and Labrador.

The project was the only project funded from Memorial University.

Dr. Katz and his research team have been exploring new materials with the necessary pore architecture to separate CO2.

> “A few years ago, we created a new material, somewhat by accident.”— Dr. Michael Katz

The filtration system would be capable of being scaled up to real-world offshore applications, allowing CO2  to be stored and available for conversion into other products.

“A few years ago, we created a new material, somewhat by accident,” said Dr. Katz. “My initial instinct was to abandon it. But, when we looked it at, we determined the atoms weren’t densely packed and the space between them was just the right size for CO2 to enter. In fact, it’s so precise, if we change one of the components to make the opening just a little bit bigger, nitrogen would also be able to enter.”

While the material does not adsorb an unprecedented amount of CO2, Dr. Katz says the unique structural features make it an excellent candidate for separation/filtration of CO2  from a complex mixture, such as exhaust.

“There are experts across Canada who make materials that are really good at adsorbing CO2.  Those would be more efficient if we can make sure the other components of the exhaust gas don’t get adsorbed or have to otherwise compete with the adsorbent.”

### Numerous uses of CO2

Dr. Katz is working with the  [Technology Transfer and Commercialization Office](https://www.mun.ca/ttco/)  – a unit within the vice-president (research) portfolio − and received support from  [Springboard Atlantic](https://www.springboardatlantic.ca/)  and the  [Lab2Market](https://lab2market.ca/)  program, to protect and validate methods related to the research.

He hopes to turn his material into pellets or a plastic film and work with the Department of Technical Services, which is also part of the research portfolio, to build a device that would be capable of separating the CO2  from other gases.

> “But what if we filtered [CO2] out at the source?”— Dr. Michael Katz

In principle, with some modification to the chemistry, the material could also be used to filter other gases of interest, such as methane or helium.

While CO2  is well-known as a pollutant tied to climate change, it also is used in a variety of industrial processes. During enhanced oil recovery (EOR), it is injected into spent wells to squeeze out more oil and gas.

It’s also used in food and carbonated drinks. There are other uses that transform CO2  chemically or biologically into synthetic fuels, building materials, plastics and more.

### Novel material

In the oil and gas industry, four major sources contribute to CO2  emissions: exhaust from engines, turbines and fired heaters; gas flaring; well testing; and EOR operations.

“Right now, the CO2  being released is going out into the environment and a thousand kilometers away someone is pulling it back out again and putting it in carbonated drinks,” said Dr. Katz. “But what if we filtered it out at the source?”

He says the project is exciting because the team will be able to do experiments that very few people have done before, as the equipment to take gas mixtures and watch them flow through a material haven’t been around long.

Dr. Katz received the  [Terra Nova Young Innovator Award](https://gazette.mun.ca/research/research-pioneers/)  in 2016, which recognizes and supports outstanding young faculty members whose research is particularly innovative and whose specific proposal has real potential to make a significant impact on society.

The award is supported through funding from Suncor on behalf of partners in the Terra Nova oil field.

_NRCan develops policies and programs that enhance the contribution of the natural resources sector to the economy, improve the quality of life for all Canadians and conduct innovative science in facilities across Canada to generate ideas and transfer technologies._

_PRNL is a federally incorporated, not-for-profit organization that facilitates and funds research and development on behalf of Newfoundland and Labrador’s offshore oil and gas industry. Members include Chevron Canada Resources; ExxonMobil Canada Ltd.; Husky Energy (a part of the Cenovus group of companies); Equinor Canada and Suncor Energy.`;
