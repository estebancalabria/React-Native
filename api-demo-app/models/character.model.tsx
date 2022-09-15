
enum Status {
    Dead = "Dead",
    Alive = "Alive",
    Unknown = "Unknown"
}

export default interface Character{
    id : number;
    name : string;
    image: string;
    status: Status;
}