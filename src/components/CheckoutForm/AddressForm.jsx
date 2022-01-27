import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';

import { commerce } from '../../lib/commerce'

const AddressForm = ( {checkoutToken}) => {
    const methods = useForm();
    const [ shippingCountries,  setShippingCountries ]=useState([]);
    const [ shippingCountry,  setShippingCountry ]=useState('');
    const [ shippingSubdivisions,  setShippingSubdivisions ]=useState([]);
    const [ shippingSubdivision,  setShippingSubdivision ]=useState('');
    const [ shippingOptions,  setShippingOptions ]=useState([]);
    const [ shippingOption,  setShippingOption ]=useState('');

    const countries = Object.entries(shippingCountries).map(([code, name])=> ({ id: code, label: name}));

    console.log(countries)

    const fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } =await commerce.services.localeListShippingCountries(checkoutTokenId);

      console.log(countries);

      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries))
    }
    
    useEffect(() => {
      fetchShippingCountries(checkoutToken.id)
    },[])

    


    return (
      <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
          <form onSubmit=''>
            <Grid container spacing={3}>
              <FormInput required='true' name="firstname" label='First Name' />
              <FormInput required name="lastname" label='Last Name' />
              <FormInput required name="address1" label='Address' />
              <FormInput required name="email" label='Email' />
              <FormInput required name="city" label='City' />
              <FormInput required name="zip" label='ZIP / Postal code' />
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select  value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                  {countries.map((country) => (
                    <MenuItem value={country.id} key={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={} fullWidth onChange={}>
                  <MenuItem value={} key={}>
                      Select me
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                  <MenuItem value={} key={}>
                      Select me
                  </MenuItem>
                </Select>
              </Grid> */}
            </Grid>
          </form>  
        </FormProvider>
      </>
    )
}

export default AddressForm

