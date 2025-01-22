import express from "express";
import multer from "multer";

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
import authActions from "./modules/auth/authActions";
import userActions from "./modules/user/userActions";

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);

router.post("/api/login", authActions.login);
router.post("/api/users", authActions.hashPassword, userActions.add);

import photoActions from "./modules/photo/photoActions";

const upload = multer({ dest: "public/photos/" });

router.get("/api/photos", photoActions.browse);
router.get("/api/photos/:id", photoActions.read);
router.post("/api/photos", upload.single("picture"), photoActions.add);

export default router;
