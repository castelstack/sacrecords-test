import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bgimg from "./../../images/blog/blog2.png";
import DATA from "../../components/DATA1.json";
import { Link } from '@material-ui/core';
import CustomButton from "../../components/button/button.components";
const useStyles = makeStyles({
  root: {
        maxWidth: 375,
        display: 'flex',
        flexDirection: 'column'
  },
  media: {
    height: 203,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '2rem',
        padding: '0 23px',
  },
    content: {
      padding: 10,
    },
    action: {
        alignSelf: ' center',
        marginTop: 'auto',
        paddingBottom: '2rem'
    }
});

export default function Cards() {
    const [news, setNews] = useState( [] )

    // api call with axios in useEffect hook
  useEffect(
    function effectFunction() {
      function fetchData() {
        const response = { DATA };
        
        const result = response.DATA;
        setNews(result);
        console.log(result);
        return response;
      }
      fetchData();
    },
    [setNews]
  );
  const classes = useStyles();

    return (
      <div className={classes.container}>
            
            {news.filter((el, idx) => idx < 4)
                .map((item) => (
                <Card className={classes.root} key={item.id}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={bgimg}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="body1" component="h3">
                               {item.title}
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.content}
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.action}>
                        <Link href='#'>
                            <CustomButton value='Read more' big/>
                       </Link>
                    </CardActions>
                </Card>))}
            </div>
  );
}