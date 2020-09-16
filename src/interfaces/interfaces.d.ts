export interface ITask { id:number, summary:string, description:string,
     createdOn:Date, dueBy:Date, priority:string, currentState }


export interface ICreateData {
        (
          id: number,
          summary: string,
          description: string,
          createdOn: Date,
          dueBy: Date,
          priority: string,
          currentState: string
        ): ITask
      }