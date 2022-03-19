import express, { Request, Response } from "express";
import AppendController from "../controllers/append";
import CountriesController from "../controllers/countries";
import StringController from "../controllers/string";
import { validate } from "../helpers/validation";

const router = express.Router();

router.get("/countries", async (req: Request, res: Response) => {
  const controller = new CountriesController();

  const { filter, order } = req.query;

  if (validate(filter, "string") && validate(order, "order")) {
    const response = await controller.getCountries(
      filter as string,
      order as string
    );
    return res.status(200).send(response);
  } else {
    return res.status(400).send({
      error:
        "Please provide valid values for filter (string) and order (asc or desc)",
    });
  }
});

router.get("/reverse/:phrase", async (req: Request, res: Response) => {
  const controller = new StringController();

  const response = await controller.manipulateString(req.params.phrase as any);

  return res.status(200).send(response);
});

router.get("/append", async (req: Request, res: Response) => {
  const contoller = new AppendController();

  const { start, end } = req.query;

  if (validate(start, "string") && validate(end, "string")) {
    const response = await contoller.manipulateArray(
      start as string,
      end as string
    );
    return res.status(200).send(response);
  } else {
    return res.status(400).send({
      error: "Please provide valid values for start (string) and end (string)",
    });
  }
});

router.get("*", (req: Request, res: Response) => {
  res.status(404).send({ error: "Where are you trying to go?" });
});
export default router;
