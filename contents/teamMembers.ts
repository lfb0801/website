import { PersonModel } from "../models/PersonModel";

export const teamMembers: { [id: string]: PersonModel } = {
  ivar: {
    firstName: "Ivar",
    lastName: "Troost",
    organisation: "Universiteit Utrecht",
    roles: ["Projectleider Utrecht", "Landelijk Projectleider"],
    email: "co-teach@uu.nl",
    personalPage: "https://www.uu.nl/medewerkers/IOTroost",
  },
  ingrid: {
    firstName: "Ingrid",
    lastName: "Breymann",
    organisation: "Universiteit Twente",
    roles: ["Projectleider Twente", "Vakdidacticus Twente"],
    email: "l.e.i.breymann@utwente.nl",
    personalPage: "https://personen.utwente.nl/l.e.i.breymann",
  },
  martijn: {
    firstName: "Martijn",
    lastName: "Meeter",
    organisation: "Vrije Universiteit Amsterdam",
    roles: ["Projectleider Amsterdam"],
    email: "m.meeter@vu.nl",
    personalPage: "https://research.vu.nl/en/persons/martijn-meeter",
  },
  berenice: {
    firstName: "Berenice",
    lastName: "Michels",
    organisation: "Universiteit Utrecht",
    roles: ["Landelijk Projectmanager"],
    personalPage: "https://www.uu.nl/medewerkers/BIMichels",
  },
  felienne: {
    firstName: "Felienne",
    lastName: "Hermans",
    organisation: "Vrije Universiteit Amsterdam",
    roles: ["Vakdidacticus Amsterdam"],
    personalPage:
      "https://www.universiteitleiden.nl/medewerkers/felienne-hermans",
  },
  rhea: {
    firstName: "Rhea",
    lastName: "van der Dong",
    organisation: "VSNU",
    roles: ["Lid namens VSNU"],
    personalPage: "https://www.vsnu.nl/vsnu-team-detail.html/medewerker/236",
  },
  fleur: {
    firstName: "Fleur",
    lastName: "Veringa",
    organisation: "VO-raad",
    roles: ["Lid namens VO-raad"],
    personalPage: "https://nl.linkedin.com/in/fleur-veringa-8abb5a3b",
  },
  jelmer: {
    firstName: "Jelmer",
    lastName: "Schreuder",
    organisation: "NLdigital",
    roles: ["Lid namens NLdigital"],
    personalPage: "https://www.linkedin.com/in/jschreuder/",
  },
  jos: {
    firstName: "Jos",
    lastName: "Tolboom",
    organisation: "SLO",
    roles: ["Lid namens SLO"],
    personalPage: "https://www.slo.nl/zoeken/@1770/jos-tolboom/",
  },
  aad: {
    firstName: "Aad",
    lastName: "van der Drift",
    organisation: "i&i",
    roles: ["Lid namens i&i"],
    personalPage: "https://www.linkedin.com/in/avddrift/",
  },
  vera: {
    firstName: "Vera",
    lastName: "Cortenraede",
    organisation: "Universiteit Utrecht",
    roles: ["Landelijk Secretaresse"],
    personalPage: "https://www.uu.nl/medewerkers/VGBCortenraede",
  },
};
