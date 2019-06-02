import { Deserializable } from './deserializable.model';


export class Journey implements Deserializable {
    public journeyId: string;
    public segmentChain: Segment[];

    deserialize(input: any): this {
        Object.assign(this, input);
          return this;
    }
}
export class Segment implements Deserializable {
    public segmentId: number;
     public segmentRouterPath: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export class Navigation implements Deserializable {
    public journeys: Journey[];
    public segments: Segment[];

    deserialize(input: any): this {
        this.segments = input.segments.map((segnemt: Segment) => new Segment().deserialize(segnemt));
        let journeys = input.journeys.map(journ =>{
            // console.log('Navigation deserialize',journ);
            journ.segmentChain = journ.segmentChain.map(segId =>{
                // console.log('Navigation deserialize',segId,this.segments,this.getSegment(segId));
                return this.segments.find((seg:any) => { 
                    return seg.id == segId 
                });
            })
            return journ;
        })
        // console.log('Navigation deserialize',journeys);
        this.journeys = input.journeys.map((journey: Journey) => new Journey().deserialize(journey));
        return this;
    }
    getSegment(segId: number): Segment {
        console.log(this.segments);
        return this.segments.find(seg => { 
            return seg.segmentId == segId 
        });
    }
    
}

