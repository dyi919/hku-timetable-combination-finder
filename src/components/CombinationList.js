import React from "react"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Fab from '@mui/material/Fab';

import TableChartIcon from '@mui/icons-material/TableChart';

import { Typography } from "@mui/material";

function CombinationList({result, displayTable}) {
    return(
        <div>
        {result.length > 0 ?
            <Typography variant='h5'>Total {result.length} {result.length > 1 ? 'combinations' : 'combination'} available!</Typography>
        : <Typography variant='h5'>No combination available :(</Typography>}
        {result.map((comb, idx) =>
            <div className='comb-list' key={idx}>
            <List className={`comb-${idx}`}>
                <Typography variant='h6'>Combination {idx+1}</Typography>
                {comb.map((course, id) => {
                    var secondaryText = course.day[0] + " " + course.stime[0] + "-" +course.etime[0] + " " + course.venue[0];
                    for (var i = 1; i < course.day.length; i++) {
                        secondaryText = secondaryText + " / " + course.day[i] + " " + course.stime[i] + "-" + course.etime[i] + " " + course.venue[i];
                    }
                    return (
                    <ListItem id={course.code} key={id}>
                        <ListItemText 
                            primary={course.code + " " + course.section + " " + course.title}
                            secondary={secondaryText}
                        />
                    </ListItem>
                    );
                }
                )}
            </List>
            <Fab className="showTimetable-button" onClick={(e)=>displayTable(idx, e)}><TableChartIcon /></Fab>
            </div>
        )}
        </div>
    );
}

export default React.memo(CombinationList);