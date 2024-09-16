import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({ title, description, buttonText, onClick }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onClick}>{buttonText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
