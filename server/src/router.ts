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
import photoActions from "./modules/photo/photoActions";
import verifdata from "./modules/services/middleware/verifdata";
import userActions from "./modules/user/userActions";

const upload = multer({ dest: "public/photos/" });

// routes liées aux users

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.get("/api/auth", authActions.verifyToken);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.destroy);
router.get("/api/logout", authActions.logout);
//applique le middleware uniquement pour la création d'un user

router.post(
  "/api/users",
  verifdata.verifyformdata,
  authActions.hashPassword,
  userActions.add,
);
router.post("/api/login", authActions.login);

// routes liées aux photos

router.get("/api/photos", photoActions.browse);
router.get("/api/photos/:id", photoActions.read);
router.post("/api/photos", upload.single("picture"), photoActions.add);
router.delete("/api/photos/:id", photoActions.destroy);

export default router;
