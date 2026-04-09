const express = require('express')
const router = express.Router()
const { createANewUser } = require("../controllers/userController");


router.route('/signup').post(createANewUser);


module.exports = router;









/** Proverbs 26:4-5 are not contradictory but provide complementary, 
 * situational wisdom on handling foolishness. 
 * Verse 4 warns against descending to a fool's level 
 * by engaging in their petty methods, 
 * while verse 5 urges exposing their folly to prevent them from becoming prideful. 
 * The goal is to correct without mimicking. 

Here is how to reconcile them:
Verse 4 (Do not answer): Avoid engaging in worthless arguments,, shouting matches, or adopting the fool's insults/methods. 
Doing so makes you look like them.
Verse 5 (Do answer): Respond to expose the emptiness or danger of their logic, or to offer correction to prevent them from believing they are wise.
The Nuance: The key is knowing when to use which approach, which requires, as detailed by this Facebook post, discernment.
Do not answer when the discussion is meant to destroy or insult (e.g., this GotQuestions article notes the dangers of responding).
Do answer when it is necessary to correct a falsehood or to prevent the spread of harmful ideas, explains this Logos Bible article. 

**/