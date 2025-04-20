
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

type Expense = {
  id: number;
  date: string;
  category: 'fixed' | 'variable' | 'employee' | 'hidden';
  subcategory: string;
  amount: number;
  description: string;
  recurring: boolean;
};

// Mock data
const initialExpenses: Expense[] = [
  {
    id: 1,
    date: "2025-04-01",
    category: "fixed",
    subcategory: "Rent",
    amount: 1200.00,
    description: "Monthly office and equipment storage rent",
    recurring: true
  },
  {
    id: 2,
    date: "2025-04-05",
    category: "fixed",
    subcategory: "Insurance",
    amount: 350.00,
    description: "Business liability insurance",
    recurring: true
  },
  {
    id: 3,
    date: "2025-04-10",
    category: "variable",
    subcategory: "Equipment Repair",
    amount: 275.50,
    description: "Replaced blade and tune-up for Mower #2",
    recurring: false
  },
  {
    id: 4,
    date: "2025-04-12",
    category: "employee",
    subcategory: "Wages",
    amount: 1600.00,
    description: "Bi-weekly payroll for 2 part-time employees",
    recurring: true
  },
  {
    id: 5,
    date: "2025-04-15",
    category: "variable",
    subcategory: "Fuel",
    amount: 320.75,
    description: "Gasoline for equipment and trucks",
    recurring: false
  },
  {
    id: 6,
    date: "2025-04-18",
    category: "hidden",
    subcategory: "Transaction Fees",
    amount: 45.20,
    description: "Credit card processing fees",
    recurring: false
  }
];

// Data for charts
const categoryTotals = [
  { name: "Fixed Costs", value: 1550, color: "#4ADE80" },
  { name: "Variable Costs", value: 596.25, color: "#F87171" },
  { name: "Employee Costs", value: 1600, color: "#60A5FA" },
  { name: "Hidden Costs", value: 45.20, color: "#FBBF24" }
];

const chartColors = ["#4ADE80", "#F87171", "#60A5FA", "#FBBF24"];

const ExpenseManagement = () => {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { toast } = useToast();

  const filteredExpenses = activeCategory === "all" 
    ? expenses 
    : expenses.filter(expense => expense.category === activeCategory);

  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newExpense: Expense = {
      id: expenses.length + 1,
      date: formData.get("date") as string,
      category: formData.get("category") as 'fixed' | 'variable' | 'employee' | 'hidden',
      subcategory: formData.get("subcategory") as string,
      amount: parseFloat(formData.get("amount") as string),
      description: formData.get("description") as string,
      recurring: formData.get("recurring") === "on"
    };
    
    setExpenses([...expenses, newExpense]);
    setIsAddDialogOpen(false);
    
    toast({
      title: "Expense Added",
      description: `${newExpense.subcategory} expense of $${newExpense.amount.toFixed(2)} has been recorded.`,
    });
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Expense Management</h1>
          <p className="text-muted-foreground mt-2">
            Track and categorize your business expenses to monitor overhead costs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Expense Summary</CardTitle>
              <CardDescription>
                Breakdown of expenses by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryTotals}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryTotals.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Stats</CardTitle>
              <CardDescription>
                This month's overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Expenses</p>
                  <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fixed Costs</span>
                    <span className="font-medium">${categoryTotals[0].value.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Variable Costs</span>
                    <span className="font-medium">${categoryTotals[1].value.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Employee Costs</span>
                    <span className="font-medium">${categoryTotals[2].value.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Hidden Costs</span>
                    <span className="font-medium">${categoryTotals[3].value.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full" onClick={() => setIsAddDialogOpen(true)}>
                    Add New Expense
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Expense List</CardTitle>
            <CardDescription>
              Manage and categorize your business expenses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
              <TabsList className="grid grid-cols-5 w-full md:w-auto md:inline-flex gap-2 h-auto bg-transparent">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  All
                </TabsTrigger>
                <TabsTrigger value="fixed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Fixed
                </TabsTrigger>
                <TabsTrigger value="variable" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Variable
                </TabsTrigger>
                <TabsTrigger value="employee" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Employee
                </TabsTrigger>
                <TabsTrigger value="hidden" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Hidden
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex justify-between mb-4">
              <Input placeholder="Search expenses..." className="max-w-sm" />
              
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Add Expense</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                    <DialogDescription>
                      Record a new business expense
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleAddExpense} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" name="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount ($)</Label>
                        <Input id="amount" name="amount" type="number" min="0" step="0.01" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select name="category" defaultValue="variable">
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fixed">Fixed Cost</SelectItem>
                            <SelectItem value="variable">Variable Cost</SelectItem>
                            <SelectItem value="employee">Employee Cost</SelectItem>
                            <SelectItem value="hidden">Hidden Cost</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subcategory">Subcategory</Label>
                        <Input id="subcategory" name="subcategory" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        placeholder="Details about this expense" 
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="recurring" 
                        name="recurring" 
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <Label htmlFor="recurring" className="text-sm">This is a recurring expense</Label>
                    </div>
                    
                    <DialogFooter>
                      <Button type="submit">Save Expense</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Subcategory</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="text-center">Recurring</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                      <TableCell className="capitalize">{expense.category}</TableCell>
                      <TableCell>{expense.subcategory}</TableCell>
                      <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className="truncate max-w-[200px] block">{expense.description}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        {expense.recurring ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ExpenseManagement;
