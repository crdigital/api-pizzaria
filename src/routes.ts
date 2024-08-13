import { Router, Request, Response } from 'express';
import multer from 'multer';
import uploadConfig from './config/multer'; // arquivo de configuração do upload com o multer

// user
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { ListUserLevelAccessController } from './controllers/user/ListUserLevelAccessController';
import { ListUserController } from './controllers/user/ListUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { ListUserByIdController } from './controllers/user/ListUserByIdController';
import { DeleteUserController } from './controllers/user/DeleteUserController';

// category
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { ListCategoryByIdController } from './controllers/category/ListCategoryByIdController';
import { RemoveCategoryController } from './controllers/category/RemoveCategoryController';

// product
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { ListProductByIdController } from './controllers/product/ListProductByIdController';
import { ListProductController } from './controllers/product/ListProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';
import { UpdateProductImageController } from './controllers/product/UpdateProductImageController';
import { RemoveProductController } from './controllers/product/RemoveProductController';

// order
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ListOrderItemConroller } from './controllers/order/ListOrderItemConroller';
import { UpdateOrderController } from './controllers/order/UpdateOrderController';
import { ListOrderIdController } from './controllers/order/ListOrderIdController';

// client
import { CreateClientController } from './controllers/client/CreateClientController';
import { ListClientController } from './controllers/client/ListClientController';
import { ListClientByNameController } from './controllers/client/ListClientByNameController';
import { ListFilterNameController } from './controllers/client/ListFilterNameController';

// address
import { CreateAddressController } from './controllers/address/CreateAddressController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.get('/', (req: Request, res: Response) => {
    return res.json({ appName: "Agenda 1.0.0" });
    // throw new Error('Erro ao fazer essa requisição!');
});

// --  users routes --
router.post('/users', new CreateUserController().handle); // create
router.post('/session', new AuthUserController().handle); // login
router.get('/me', isAuthenticated, new DetailUserController().handle); // user details
router.get('/users/level', isAuthenticated,new ListUserLevelAccessController().handle) // user by  access_level
router.get('/users', isAuthenticated, new ListUserController().handle);  // list all users
router.get('/user', isAuthenticated, new ListUserByIdController().handle); // list user by id
router.put('/user/update', isAuthenticated, new UpdateUserController().handle); // update user
router.delete('/user/delete', isAuthenticated, new DeleteUserController().handle); // delete user

// -- categories routes --
router.post('/category', isAuthenticated, new CreateCategoryController().handle); // create
router.get('/categories', isAuthenticated, new ListCategoryController().handle); // List all
router.put('/category', isAuthenticated, new UpdateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryByIdController().handle);
router.delete('/category/delete', isAuthenticated, new RemoveCategoryController().handle);

// -- product routes --
router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle); // create
router.put('/product/update', isAuthenticated, new UpdateProductController().handle); // update no image upload
router.put('/product/update/image', isAuthenticated, upload.single('file'),new UpdateProductImageController().handle); // update image upload
router.get('/products', isAuthenticated, new ListProductController().handle); // lista all
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle); // list by category
router.get('/product', isAuthenticated, new ListProductByIdController().handle); // list by id
router.delete('/product/delete', isAuthenticated, new RemoveProductController().handle);

// -- order --
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/item', isAuthenticated, new AddItemController().handle);
router.delete('/order/item', isAuthenticated, new RemoveItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrderController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);
router.get('/order/items', isAuthenticated,  new ListOrderItemConroller().handle);
router.put('/order/update', isAuthenticated, new UpdateOrderController().handle);
router.get('/order/byid', isAuthenticated, new ListOrderIdController().handle);

// -- client --
router.post('/client', isAuthenticated, new CreateClientController().handle);
router.get('/clients', isAuthenticated, new ListClientController().handle);
router.get('/client/name', isAuthenticated, new ListClientByNameController().handle);   
router.get('/client/filter/name', isAuthenticated, new ListFilterNameController().handle );

// -- address --
router.post('/address', isAuthenticated, new CreateAddressController().handle);

export { router };