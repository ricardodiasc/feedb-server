const channels = [{
    id: 1,
    name:"soccer"
},{
    id:2,
    name:"baseball"
},{
    id:3,
    name:"CDS"
}];

export const resolvers ={
    Query: {
        channels: () => {
            return channels
        }
    }
}