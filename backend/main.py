from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, specify the frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # DAG Validation logic
    adj = {node['id']: [] for node in pipeline.nodes}
    in_degree = {node['id']: 0 for node in pipeline.nodes}
    
    for edge in pipeline.edges:
        source = edge['source']
        target = edge['target']
        if source in adj and target in adj:
            adj[source].append(target)
            in_degree[target] += 1
            
    # Kahn's algorithm for DAG check
    queue = [n for n in in_degree if in_degree[n] == 0]
    count = 0
    
    while queue:
        u = queue.pop(0)
        count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    is_dag = count == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
