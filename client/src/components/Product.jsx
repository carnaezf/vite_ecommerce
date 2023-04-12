import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        category,
        sellingPrice,
        description,
        images
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            // className={ classes.action }
            variant='h5'
            color='textSecondary'
          >
            {50}
          </Typography>
        }
        title="EQT Spikeless Golf Shoes"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://assets.adidas.com/images/w_600,f_auto,q_auto/0ee4ef2f134d46beaefcac5c011c4bca_9366/EQT_Spikeless_Golf_Shoes_Grey_FX7449_06_standard.jpg"
        alt="shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label='Add to Cart' onClick={addToBasket} >
          <AddShoppingCartIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            "EQT Spikeless Golf Shoes",
          </Typography>
          <Typography paragraph>
            "Put comfort first. These adidas spikeless golf shoes combine a Bounce midsole and a Boost
            heel for a lightweight, responsive feel that helps you convert bogie's to birdies.
            They repel water to keep your feet dry through wet fairways. The versatile rubber outsole
            ensures easy transitions from your final putt to cold drinks at the clubhouse.
            Recycled materials are one step towards reducing plastic waste."
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}