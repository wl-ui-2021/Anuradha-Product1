import React from 'react'
import {Grid , Typography , Button , Card , CardActions, CardContent , CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/'
import {Link} from 'react-router-dom'

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

export const Cards1= (props) => {
    const classes = useStyles(); 
    const {product} = props
    return (
  
                <Grid item xs={12} sm={6} md={4}>
                        <Link to = {`/${product.id}`} style={{textDecoration : 'none'}}>
                          <Card className={classes.card}>
                              <CardMedia
                                className={classes.cardMedia}
                                image={product.img}
                                title="Image title"
                              />
                              <CardContent>
                                  <Typography>{product.name}</Typography>
                                  <Typography>{product.price}</Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small" color="primary">
                                    View
                                  </Button>
                                 
                              </CardActions>
                          </Card>
                          </Link>
                      </Grid>
             
    )
}