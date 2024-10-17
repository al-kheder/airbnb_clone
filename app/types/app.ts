
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

export type ExplorData = ExplorItem[]
export type LiveData = LiveItem[]