import React , {useState, useEffect} from 'react'
import axios  from 'axios'
import { Typography , Button , Card , CardActions, CardContent , CardMedia, makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    cardGrid : {
      paddingTop : theme.spacing(8),
      paddingBottom : theme.spacing(8)
    },
    card: {
      height : '100%',
      display : 'flex',
      flexDirection : 'column'
    },
    cardMedia:{
      paddingTop : '56.25%'
    }
  }))


export const CourseDetails= (props) => {
    const classes = useStyles(); 
    const [productData , setProductData ] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    console.log("params",props)

    const getProductData = async ()=>{
        const res = await axios.get('/data2.json');
        const findProductData = res.data.find((p)=> p.id === props.match.params.id)
        setProductData(findProductData)
        setIsLoading(false)
    } 

    useEffect(()=>{
        getProductData()

        return ()=> {
          console.log("cleaned up")
        }
    }, [])
    
    return (
        <div>
            <h1>Detail Product : {props.match.params.id}</h1>
            {
                isLoading ? <><center><b><h3>Loading</h3></b></center> </> 
                : 
                <div>
                      <Card className={classes.card}>
                              <CardMedia
                                className={classes.cardMedia}
                                image={productData.img}
                                title="Image title"
                              />
                              <CardContent>
                                  <Typography>{productData.name}</Typography>
                                  <Typography>{productData.price}</Typography>
                                  
                              </CardContent>
                              <CardActions>
                                  <Button size="small" color="primary">
                                    Buy Now
                                  </Button>
                                 
                              </CardActions>
                          </Card>
                </div>
            }
        </div>
    )
}