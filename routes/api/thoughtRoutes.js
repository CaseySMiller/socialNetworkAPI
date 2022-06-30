const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// get /api/thoughts/
router.route('/').get(getThoughts);
// get /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getOneThought);
// post /api/thoughts/
router.route('/').post(createThought);
// put /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);
// delete /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);
// post /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)
// delete /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
