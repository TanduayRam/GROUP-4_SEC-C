`const router = express.Router();

let categories = [
    {
        id:1,
        name: "Hakdog",
        description: "Food"
    }
];

router.get('/',(req,res) =>{
    let result = categories;

    if (req.query.name) {
        result = categories.filter(x => x.name ==req.query.name);
    }

    res.status(200).jason ({
        success:true,
        data:result

    });

}) ;

router.get('/:id', (req,res) => {
let category = categories.find(x => x.id == req.params.id);

if (!category) {

return res.status(404).json({
    success: true,
    data: category
});
}

res.status(200).json({
    success: true,
    data: category
});

});

router.post('/',(req,res) => {
    const
}`