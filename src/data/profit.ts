export type ProfitInputs={visitors:number,currentRate:number,targetRate:number,closeRate:number,sale:number,margin:number,cost:number};
export function estimateProfit(v:ProfitInputs){
 const valid=Object.values(v).every(Number.isFinite)&&v.visitors>=0&&v.sale>=0&&v.cost>=0&&[v.currentRate,v.targetRate,v.closeRate,v.margin].every(n=>n>=0&&n<=100);
 if(!valid)return null;
 const currentLeads=v.visitors*v.currentRate/100,targetLeads=v.visitors*v.targetRate/100;
 const extraLeads=targetLeads-currentLeads,extraCustomers=extraLeads*v.closeRate/100;
 const revenue=extraCustomers*v.sale,grossProfit=revenue*v.margin/100,netProfit=grossProfit-v.cost;
 return {currentLeads,targetLeads,extraLeads,extraCustomers,revenue,grossProfit,netProfit};
}
