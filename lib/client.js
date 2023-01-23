import  sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "e5i9z576",
    dataset: "production",
    apiVersion: "2023-01-23",
    useCdn: true,
    token: "sk96pm5x0iyenSo6zJ4qVKqElNlZTue12WROiJsV0W7dTIxBEOtil6c96McDzL1oaceT3mB7XW7neaTQ7p8aoeJ7kKEkWjXZq2V1YElKaM7Jc4WvibdLeDrmbJWD9r1i0CSHchTZeTXFGkGylLpOQaVaVaZSBjgGVO2DXcxRD5wKWbDtthXG"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)