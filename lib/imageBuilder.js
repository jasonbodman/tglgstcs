import imageUrlBuilder from '@sanity/image-url'
import client from "../client"

export const imageBuilder = (source) => imageUrlBuilder(client).image(source);
