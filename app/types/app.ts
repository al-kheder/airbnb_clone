
export type ExplorItem ={
    id:number,
    name:string,
    imageUrl:string,
    price:number,
    priceCurrency:string

}
export type LiveItem ={ 
    name:string,
    imageUrl:string,
}

export type ListingCardItem ={
    id:number,
    imageUrl :string,
    location:string,
    name:string,
    price_per_night:number,
    priceCurrency:string,
    description:string,
    star:number,
    total:string,
    lng:number,
    lat: number,
}

export type ExplorData = ExplorItem[]
export type LiveData = LiveItem[]
export type SearchResults = ListingCardItem[]