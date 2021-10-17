import React from "react";

import { Card, CardContent , Typography , Grid } from '@material-ui/core';   
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    console.log(confirmed);
    if(!confirmed){
        return "loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} sx={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Số ca nhiễm
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            { new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                           Trường hợp bị nhiễm COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sx={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Đã hồi phục
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            { new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Số người đã thoát khỏi bệnh COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} sx={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Số người chết
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            { new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Số người chết do COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

            
        </div>
        )
}
export default Cards;