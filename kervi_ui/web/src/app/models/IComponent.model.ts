import { KerviService } from '../kervi.service'
export interface IComponent {
    id: string;
    name: string;
    visible: boolean;
    componentType: string;
    dashboards : string[];

    updateReferences(kerviService:KerviService);
}