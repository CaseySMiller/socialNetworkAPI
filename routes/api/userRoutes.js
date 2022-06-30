const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// get /api/users/
router.route('/').get(getUsers);
// get /api/users/:userId
router.route('/:userId').get(getOneUser);
// post /api/users/
router.route('/').post(createUser);
// put /api/users/:userId
router.route('/:userId').put(updateUser);
// delete /api/users/:userId
router.route('/:userId').delete(deleteUser);
// post/delete /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;
