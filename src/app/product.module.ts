export class product 
{
    _id!: number
    title!: string
    isbn!: string
    pageCount!: number
    publishedDate!: PublishedDate
    thumbnailUrl!: string
    shortDescription!: string
    longDescription!: string
    status!: string
    authors!: string[]
    categories!: string[]
    price!:number
}

export class PublishedDate {
    $date!: string
  }