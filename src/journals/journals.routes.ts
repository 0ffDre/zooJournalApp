import { Router } from 'express';
import * as JournalsController from './journals.controller';

const router = Router();
router.
    route('/journals').
    get(JournalsController.readJournals);

router.
    route('/journals/:userfk/').
    get(JournalsController.readJournalByUserId);

router.
    route('/journals/:location').
    get(JournalsController.readJournalByLocation);

router.
    route('/journals/:search/location/:search').
    get(JournalsController.readJournalsByLocationSearch);


router.
    route('/journals').
    post(JournalsController.createJournal);

router.
    route('/journals').
    put(JournalsController.updateJournal);

router.
    route('/journals/:journalId').
    delete(JournalsController.deleteJournal);
export default router; 