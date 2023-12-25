import {createClient} from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

 export const client= createClient({
    projectId:'j8e2fjn0',
    dataset:'production',
    apiVersion:'2023-12-22',
    useCdn:'true',
    token:'skmFi6u618sUVMRu5aHg8SElNnAuqGpj8obvlQq1HZsbaxcTujD9DK9FiltBidmmIJ2iDih0cTJx4Mb06sTOeGaMR6r5yNCtrIM2REI3QR6sKLmTy7OT2qHjsDh2iQDtVY9RUJ9988S8ch5pHfhBKJrJG6e3MWZgjTOo0X7tkUkNM80EYARp'
})

const builder = ImageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source)