import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Define user-related routes
import userActions from "./modules/user/userActions";

router.get("/api/users", userActions.browse);

import photoActions from "./modules/photo/photoActions";

router.get("/api/photos", photoActions.browse);
router.get("/api/photos/:id", photoActions.read);

export default router;
