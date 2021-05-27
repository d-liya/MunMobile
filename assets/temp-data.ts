export const libraryInfo = [
  {
    name: "Queen Elizabeth II Library",
    description: "20 individual study carrels. 10 computers in the Commons",
    available: ["Sunday-Thursday: 11:00am-7:00pm", "Friday-Saturday: Closed"],
  },
  {
    name: "Grad Study Space: The Rotunda",
    description:
      "10 individual grad student study spaces. Booking requests must be submitted 24 hours in advance. It is accessed by swiping your MUN ID Card once it has been activated by CEP. Please ensure you have received a follow up email confirming your booking request.",
    available: ["Monday: 12:00pm-9:00pm", "Tuesday to Saturday: 9:00am-9:00pm", "Sunday: Closed"],
  },
  {
    name: "Grenfell Campus Arts & Science Extention",
    description: "11 individual study carrels",
    available: [
      "Monday to Thursday: 11:00am-3:00pm and 4:00pm-8:00pm",
      "Friday: 11:00am-3:00pm",
      "Saturday: Closed",
      "Sunday: 1:00pm-5:00pm",
    ],
  },
  {
    name: "Health Sciences Library",
    description:
      "33 individual study carrels. 8 computers. \n Entrance: Students permitted access to the Health Sciences Centre may enter through the internal library entrance. All other students, please use the Emergency Exit doors located at the South entrance of the Health Sciences Centre. Use the road by the bridge nearest the new Animal Research Centre and proceed past parking lot 9H.",
    available: [
      "Monday: Closed",
      "Tuesday: 9:00am-4:00pm",
      "Wednesday: 1:00-8:00pm",
      "Thursday: 1:00-8:00pm",
      "Friday: 9:00am-4:00pm",
      "Saturday: Closed",
      "Sunday: 9:00am-4:00pm",
    ],
  },
];

export const courseInfo = [
  {
    name: "Intro to Programming",
    code: "COMP 1001",
    startingDate: "2021-04-01",
    endDate: "2021-08-26",
    days: [
      { day: "Monday", time: "10:00 am - 11:00 am" },
      { day: "Wednesday", time: "10:00 am - 11:00 am", description: "Labs" },
      { day: "Friday", time: "10:00 am - 11:00 am" },
    ],
  },
  {
    name: "Intro to Logic for Comp Sci",
    code: "COMP 1002",
    startingDate: "2021-04-01",
    endDate: "2021-08-26",
    days: [
      { day: "Monday", time: "12:00 am - 01:00 pm" },
      { day: "Thursday", time: "03:00 pm - 03:00 pm", description: "Labs" },
      { day: "Friday", time: "10:00 am - 11:00 am" },
    ],
  },
  {
    name: "Linear Algebra I",
    code: "MATH 2050",
    startingDate: "2021-04-01",
    endDate: "2021-08-26",
    days: [
      { day: "Monday", time: "09:00 am - 10:00 pm" },
      { day: "Thursday", time: "09:00 am - 10:00 am" },
    ],
  },
  {
    name: "Writing Second Lang Stdnts",
    code: "ENGL 1020",
    startingDate: "2021-04-01",
    endDate: "2021-08-26",
    days: [
      { day: "Monday", time: "05:00 pm - 06:00 pm" },
      { day: "Thursday", time: "05:00 pm - 06:00 pm" },
    ],
  },
];

export const gradeInfo = {
  selectedValue: 1,
  items: [
    { label: "2020 Winter", value: 4.0 },
    { label: "2020 Fall", value: 3.85 },
    { label: "2021 Winter", value: 3.75 },
  ],
  data: {
    0: [
      { name: "Intro to Programming", code: "COMP 1001", marks: 88 },
      { name: "Intro to Logic for Comp Sci", code: "COMP 1002", marks: 93 },
      { name: "Linear Algebra I", code: "MATH 2050", marks: "PAS" },
      { name: "Writing Second Lang Stdnts", code: "ENGL 1020", marks: 80 },
    ],
    1: [
      { name: "Foundation of Computing Sys", code: "COMP 1003", marks: 86 },
      { name: "Intro to Microeconomics", code: "ECON 1010", marks: 88 },
      { name: "CRW: Telling Stories", code: "ENGL 1090", marks: 71 },
      { name: "Calculus III", code: "MATH 2000", marks: 89 },
    ],
    2: [
      { name: "Obj-Orient Prgm Human Comp Int", code: "COMP 2001", marks: 71 },
      { name: "Data Strctrs & Algorithms", code: "COMP 2002", marks: 89 },
      { name: "CRW Phil of Human Nature", code: "PHIL 1010", marks: 74 },
    ],
  },
};

export const newsInfo = [
  {
    title: "Proof of concept",
    category: "Research",
    image: require("../assets/images/poc.jpg"),
    date: "May 6, 2021",
    description:
      "Chemistry researcher receives $655,900 to advance decarbonizing N.L. oil and gas ",
  },
  {
    title: "Testing the water",
    category: "Research",
    image: require("../assets/images/ttw.jpg"),
    date: "May 12, 2021",
    description:
      "Researchers, fish harvesters rely on Marine Institute’s flume tank for safe, accessible trial runs",
  },
  {
    title: "Funding available",
    category: "Campus And Community",
    image: require("../assets/images/fa.jpg"),
    date: "May 18, 2021",
    description: "Deadline June 15 for conference, cross-campus initiatives funds",
  },
  {
    title: "Learned Perspective",
    category: "Student Life",
    image: require("../assets/images/lp.jpg"),
    date: "May 14, 2021",
    description: "Mature undergraduate student brings life experience into the classroom",
  },
];

export const lp = `
May 14, 2021

BY  [MELISSA JENKINS](https://gazette.mun.ca/contributor/melissa_jenkins)

Seventeen years ago, my dad drove me to my first day at Memorial University in his old Ford Ranger pickup truck.

He dropped me off at Curtis House, my new home in Paton College on the university’s St. John’s campus.

Like most first-year students just out of high school, I found it a little scary to be living on my own and graduating to “adult” status.

### Major life differences

In 2004 things were much different than they are today.

To start, Wi-Fi wasn’t readily available.

In fact, the internet was connected through a cable in the wall and plugged directly into your desktop computer.

Laptops weren’t practical because they weighed too much to carry around. And you had to bring a three-and-a-half-inch floppy disk with you when you went to the library to use the computers so you could bring your work home.

My cellphone was oversized and heavy and didn’t even have text messaging capability.

There were no apps or internet on it, and you could only call people after 6 p.m. when it was free to make a call or you had to pay for it.

![Three women sit in a restaurant together with drinks in their hands](https://i0.wp.com/gazette.mun.ca/wp-content/uploads/2021/05/Undergraduate-days-1-scaled.jpg?resize=768%2C967&quality=100&ssl=1)

At left, Melissa Jenkins with friends during her undergraduate days.

PHOTO: SUBMITTED

I also didn’t have a vehicle (most of us in our first year didn’t), so the bus was my only method of transportation.

And back then, student loans were my only method of financial support.

During the following three years at Memorial, my area of study changed a few times – from political science to history to psychology, then finally settling on sociology.

### On her own path

It was August 2007 when I decided to attend a local college to complete a diploma instead of completing my degree. It was what I needed to do at the time.

As I got older, the thought of returning to Memorial faded into the background.

Like many others, I had expenses, life events, financial and professional obligations, so completing a bachelor of arts degree wasn’t high on my priority list.

I am lucky to have had two successful careers, one in journalism and one in career counselling.

> “Bringing life experience into the classroom is a definite advantage.”— Melissa Jenkins

My full-time job is as an employment facilitator for a not-for-profit organization. It’s here that my thoughts of returning to Memorial University became a reality.

In January of this year, during a conversation with my supervisor, I mentioned that I wanted to complete my degree, eventually.

He agreed that not only should it happen, but that it would happen. It was his encouragement and advice that led me to re-apply to Memorial.

Plus, the current pandemic meant all courses were happening online, which was ideal for my professional obligations.

### Keeping her eye on the prize

![A head shot of a woman in a car.](https://i0.wp.com/gazette.mun.ca/wp-content/uploads/2021/05/Headshot.jpg?resize=300%2C300&quality=100&ssl=1)

Melissa Jenkins

PHOTO: SUBMITTED

Fast forward four months, and I am about to begin my first two courses since 2007.

This time, it feels a lot different from when my dad brought me to my residence in his truck.

I believe that, in life, people are always learning, and bringing life experience into the classroom is a definite advantage.

I am excited to take on this new challenge. Do I have fear? Definitely. Do I have anxiety about being a student again at 35? Absolutely.

Am I concerned that most of the other students were in kindergarten the last time I was a university student? Not at all.

If I have learned anything in life, it’s that no matter how much has changed, you can still pick back up where you left off and successfully reach that goal.`;

export const fa = `May 12, 2021

BY  [JEFF GREEN](https://gazette.mun.ca/contributor/jeff-green)

Members of the university community are invited to submit applications to a pair of institutional funds.

### Cross-campus Initiatives Fund

The Cross-campus Initiatives Fund builds on existing strategic relationships between Memorial’s campuses.

The fund annually allocates a total of $40,000 over three calls as one-time support for travel for new initiatives that are clearly and demonstrably strategic for the units, falling outside the scope of regular business. Travel must be in accordance with Memorial’s travel policy. The terms of reference for this fund can be found [here](https://www.mun.ca/vpacademic/ccfi/CCIF_Revisions_Sept_2018.pdf).

More details on the fund, including guidelines for proposals, are available [here](https://www.mun.ca/vpacademic/ccfi/). Inquiries can be directed to the Office of the Provost and Vice-President (Academic) at 709-864-8246 or via [email](mailto:vpacad@mun.ca).

Applications to the Cross-campus Initiatives Fund must be submitted  [electronically](mailto:vpacad@mun.ca).

### Conference Fund

The Conference Fund provides funding for conferences, workshops or seminars that are hosted or co-hosted by Memorial University. Please note: the fund does not provide financial support for employees to travel to such events.

The fund allocates a total of $50,000 annually over three calls, providing one-time support of regular conferences, as opposed to large-scale events.

Terms of reference and a template for submissions are available [here](https://www.mun.ca/research/funding/conference/). Inquiries can be directed to the Office of the Vice-President (Research) at 709-864-3650 or via [email](mailto:ebruce@mun.ca).

Applications to the Conference Fund must be submitted  [electronically](mailto:ebruce@mun.ca).

### June 15 deadline

Applications for both funds are due by Tuesday, June 15.

Please contact your unit’s grants facilitator (or, if the unit has no grants facilitator, the person with signing authority for your unit) to confirm if there are earlier, internal deadlines. These internal deadlines must be factored into the timing of the development and submission of these applications.

Any events or initiatives supported will need to be in line with public health guidelines and provincial regulations related to the ongoing COVID-19 pandemic.

The portfolios of the Vice-President (Research), Vice-President (Academic), Vice-President (Marine Institute) and Vice-President (Grenfell) support both funds.

Memorial issues a call for applications to both funds three times per academic year (October, February and June).`;

export const ttw = `May 5, 2021

BY  [MOIRA BAIRD](https://gazette.mun.ca/contributor/moira-baird)

For Dr. Shannon Bayse, testing and evaluating experimental fishing gear starts at the Marine Institute’s (MI) flume tank.

It’s a critical first step in testing ideas and underwater technology.

Dr. Bayse is a research scientist with MI’s  [Centre for Sustainable Aquatic Research](https://www.mi.mun.ca/departments/centreforsustainableaquaticresources/)  (CSAR) at Memorial University.

His research focuses on fishing gear, fish behaviour, conservation engineering, fish physiology and bycatch reduction.

### World’s largest flume tank

He and a team of graduate students, trawl designers and technologists are working on experimental codends – the end part of the net where fish are collected – to improve size selectivity in redfish trawls and reduce fish mortality.

![A man with brown hair and goatee stands in front of a tank of water used for testing fishing gear](https://i0.wp.com/gazette.mun.ca/wp-content/uploads/2021/04/ShannonBasye3-CSAR-MI-Flume-tank-Gazette-scaled.jpg?resize=768%2C512&quality=100&ssl=1)

Dr. Shannon Bayse is a research scientist with the Marine Institute’s Centre for Sustainable Aquatic Research.

PHOTO: ANGIE BISHOP

“The flume tank plays an important role in this because it educates both scientists and fishers as to what the gear is actually doing,” said  [Dr. Bayse](https://www.mi.mun.ca/departments/officeofresearchanddevelopment/ourresearchers/drshannonbayse.php). “Without the tank, you can’t see what needs fixing or tweaking before you put this experimental gear in the ocean.”

The world’s largest  [flume tank](https://www.mi.mun.ca/facilities/flumetank/)  is the aquatic equivalent of an aerospace wind tunnel: circulating 450,000 gallons of water at up to six feet per second to mimic towing objects through the ocean.

Academic and industry researchers use the flume tank for performance evaluations, tests and observations of new technology, including fishing gear, marine turbines and underwater robotics.

“In the tank we can measure how the different water flows affect openings of the mesh, which affects selectivity,” Dr. Bayse said.

### Improving size selectivity

This research is part of a larger project led by  [Dr. Paul Winger](https://www.mi.mun.ca/departments/officeofresearchanddevelopment/ourresearchers/drpaulwinger.php), director of CSAR and one of three principal MI researchers working on  [Ocean Frontier Institute projects](https://oceanfrontierinstitute.com/research/sustainable-capture-fisheries-and-their-ecosystems%20)  on sustainable capture fisheries and their ecosystems.

One goal is to develop fishing gear that enables undersized redfish – those less than 22 centimetres – to escape the codend. To do that, the researchers are testing a net mesh known as T90 used in Europe.

![A large net with balls in one end is seen through a viewing gallery.](https://i0.wp.com/gazette.mun.ca/wp-content/uploads/2021/04/MI-Flume-tank-T90-codend-Gazette-scaled.jpg?resize=768%2C372&quality=100&ssl=1)

Researchers tested T90 net mesh in the flume tank. Small buoys were used in the codend where fish are collected.

PHOTO: ANGIE BISHOP

In July, the team published the results of T90 sea trials in the  [_Canadian Journal of Fisheries and Aquatic Sciences_](https://cdnsciencepub.com/doi/10.1139/cjfas-2020-0063#.XxWf6kxFyuE)_._

Those field tests were conducted in the Gulf of St. Lawrence, where there has been no redfish fishery since the early 1990s.

Researchers compared the size selectivity of one traditional codend with three experimental ones with different T90 mesh sizes.

### Smaller fish escape

Overall, the researchers found that a greater percentage of undersized redfish were able to escape the T90 codends.

As the nets were towed through the water, the T90 mesh remained open, providing small redfish a greater opportunity for escape.

> “When they escape is a really important piece of the puzzle.”— Dr. Shannon Bayse

The same was not true of the traditional net mesh.

“Very few fish escaped the traditional codend,” said Dr. Bayse. “When you’re towing the net, the mesh opening will shrink under load and not a lot of fish are escaping.”

The next step?

Figuring out if redfish survive their release from the T90 codend.

“When they escape is a really important piece of the puzzle,” Dr. Bayse said. “If they’re getting out of the mesh when the codend is sitting near the top of the water, that fish isn’t going to live. That’s something we need to quantify and that will help us know how effective the T90 approach is at lowering fishing mortality.”`;

export const pof = `May 5, 2021

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

export const news = [pof, ttw, fa, lp];
