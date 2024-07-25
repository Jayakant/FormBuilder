import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import { toast } from "react-toastify";

import {
    Tooltip,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from 'recharts';


export default function TestRadarCHarts({
    graphData, polarAngleAxis
}) {

    let chartArray = []

    let headQuarters = []

    for (let keys in graphData[0]) {
        if (keys !== polarAngleAxis) {
            headQuarters.push(keys)
        }
    }

    for (let item of headQuarters) {
        chartArray.push(
            <Grid item xs={6} key={item}>
                <Paper
                    sx={{
                        m: 1,
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        outline: "2px solid #969696",
                    }}
                    elevation={10}
                >
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography fontWeight="500" fontSize="27px" variant="body1">
                                Headquarter : {item}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ResponsiveContainer width={500} height={400}>
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={graphData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey={polarAngleAxis} stroke='white' />
                                    <Radar name={item} dataKey={item} stroke="#8884d8" fill="#fbc02d" fillOpacity={0.6} />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }

    return (
        <>
            {chartArray}
        </>
    )
}