
type catchAsync = (
  req: Request,
  res: Response,
) => Promise<unknown>;
const catchAsync = (execution: catchAsync) =>
  (req: Request, res: Response): void => {
    execution(req, res).catch((e: Error) => {
      
      return  Response.json({message:"User is Already Present"});
    });
  };

  export default catchAsync;