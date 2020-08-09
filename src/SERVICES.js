import card from "./assets/cards.png";
import React from "react";

const design = {
    title: 'Design',
    image: card,
    url: 'design',
    id: '0185dXwLIU02fSFATrFnDb'
};
const development = {
    title: 'Development',
    image: card,
    url: 'development',
    id: '52cGQTQuEJHX74rxLWd0OK'
};
const marketing = {
    title: 'Marketing',
    image: card,
    url: 'marketing',
    id: '4Apa4QTiybbOuWPwUFh1um'
};
const education = {
    title: 'Education',
    image: card,
    url: 'education',
    id: '3C6If7MxA4J4cnaWsnUHL'
};
const assistance = {
    title: 'Assistance',
    image: card,
    url: 'assistance',
    id: '5pcmSez5I2OMsqG9zZvC8X'
};
const production = {
    title: 'Productions',
    image: card,
    url: 'productions',
    id: '59NzqIPY3t0HLeiQRJQaQ5'
};
const language = {
    title: 'Language Services',
    image: card,
    url: 'language',
    id: `1cx1CdiPJpL0pOaYokn8Eh`
};
const media = {
    title: 'Media',
    image: card,
    url: 'media',
    id: '2Fy5ahj8Kk5Y0Mzy4gkac4'
};
export const SERVICES = {
    design,
    development,
    marketing,
    education,
    assistance,
    production,
    language,
    media,
}

export const services = Object.values(SERVICES).sort((s1, s2) => s1.title.localeCompare(s2.title))