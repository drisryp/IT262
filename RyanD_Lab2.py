#Collab Link: https://colab.research.google.com/drive/13n-rM1_SBN_7161DDPv9pVNs6GO1zhGE?usp=sharing
import pandas as pd
import math
#reading data into pandas dataframe

dataT=pd.read_csv('/content/drive/MyDrive/262-CBA.csv')
print(dataT)


discountRate=0.05
discountFactor=[0,0,0,0]
for year in dataT['years']:
  discountFactor[year]=1/math.pow((1+discountRate),year)

dataT['discountFactor']=[round(num, 2) for num in discountFactor]
print(dataT)

#my stuff
number=[0,0,0,0] #initialize a blank array starting with 0s
for year in dataT['years']: #loop through all the years
  number[year]=discountRate+5+year # for each year at the given index do the formula and update the number

dataT['number']= number #add/controls the numbers in the chart, given an array of the same size
print(dataT)


#calc net benefit/cost for each
NetBC = [0,0,0,0]
for year in dataT['years']:
  NetBC[year]=dataT['developmentCost'][year]+dataT['operationalCost'][year]+dataT['valueOfBenefits'][year]

dataT['NetBC']=NetBC
print(dataT)

#calc net present value
NPV=[0,0,0,0]

for year in dataT['years']:
  NPV[year]=dataT['NetBC'][year]*dataT['discountFactor'][year]

dataT['NPV']=[round(num, 2) for num in NPV]
print(dataT)  
